from flask import Flask
from flask import jsonify
import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
import joblib
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

model = load_model('electricity_prediction_model.keras')

scaler = joblib.load('scaler.joblib')

state_dict = joblib.load('state_dict.joblib')

SEQ_LENGTH = 12
TARGET_MONTHS = 5

df = pd.read_csv('./historical_electricity_data.csv')
df['Date'] = pd.to_datetime(df['Date'])

def prepare_input_data(state, date):
    state_num = state_dict[state]
    date = pd.to_datetime(date)
    
    state_data = df[(df['State'] == state) & (df['Date'] <= date)].sort_values('Date').tail(SEQ_LENGTH)
    
    if len(state_data) < SEQ_LENGTH:
        return None
    
    # Prepare input data
    date_input = state_data[['Year', 'Month']].values
    date_input = np.expand_dims(date_input, axis=0)  # Add batch dimension
    state_input = np.full((1, SEQ_LENGTH), state_num)
    
    return date_input, state_input

@app.route('/predict/<state>/<date>')
def predict(state, date):
    input_data = prepare_input_data(state, date)
    
    if input_data is None:
        return jsonify({'error': f'Not enough historical data for {state} as of {date}'}), 400
    
    date_input, state_input = input_data
    
    # Make prediction
    prediction = model.predict([date_input, state_input])
    
    # Reshape and inverse transform the prediction
    prediction = prediction.reshape(TARGET_MONTHS, -1)
    prediction = scaler.inverse_transform(prediction)
    
    # Generate dates for the predicted months
    pred_dates = pd.date_range(start=pd.to_datetime(date) + pd.DateOffset(months=1), periods=TARGET_MONTHS, freq='M')
    
    # Create DataFrame with predictions
    columns = ['Peak Demand (MW)', 'Peak Production (MW)', 'Solar Production (MW)', 'Coal Production (MW)', 'Total Production (MW)']
    df_pred = pd.DataFrame(prediction, columns=columns, index=pred_dates)
    df_pred.index = df_pred.index.strftime('%Y-%m-%d')
    
    return jsonify(df_pred.to_dict(orient='index'))

# if __name__ == '__main__':
#     app.run(debug=True)
if __name__ == '__main__':
    app.run(debug=True, port=5000)