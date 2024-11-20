# ai-project
AI-Based Electricity Demand Forecasting for Indian Power Systems
This project develops an AI-based model using Long Short-Term Memory (LSTM) networks to forecast electricity demand, production, and peak demand for Indian states. The model predicts electricity production from various sources (coal, solar, etc.) for a 5-month horizon, helping grid operators and policymakers make informed decisions.

Table of Contents
Overview
Technologies Used
Dataset
Installation
Results
Future Scope
License
Overview
The AI model utilizes Long Short-Term Memory (LSTM) networks to predict:

Total electricity production
Peak electricity demand
Coal and solar production for a 5-month period
The goal is to optimize grid management and resource allocation for better energy sustainability, particularly focusing on power systems in Indian states.

Technologies Used
Python for coding
TensorFlow/Keras for LSTM model development
NumPy for data manipulation
Pandas for data preprocessing
Matplotlib/Seaborn for data visualization
scikit-learn for performance metrics (MAE, RMSE, etc.)
Dataset
The dataset used for this project contains historical electricity demand and production data, with separate columns for total production, peak demand, coal production, and solar production over time. Data preprocessing and normalization steps are essential to ensure that the LSTM model performs optimally.


Installation
To get started with the project, clone the repository:

bash
Copy code
git clone https://github.com/your-username/electricity-demand-forecasting.git
cd electricity-demand-forecasting
Install the required dependencies:


bash
Copy code
python train_model.py
To make predictions, use the following script:

bash
Copy code
python predict.py
Ensure that the data is in the correct format and that all necessary files are available before running the scripts.

Results
The model's accuracy is evaluated using standard regression metrics like Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² Score. Visualizations show how the model predictions align with actual data over time.

Future Scope
The project can be enhanced by:

Integrating external variables like weather, economic growth, and population trends.
Adding real-time data integration for dynamic forecasting.
Extending the forecasting period for longer-term predictions.
Adapting the model for use in other regions of India or globally.
