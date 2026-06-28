# app/services/profiler.py
import pandas as pd
import os

UPLOAD_DIR = "uploads"

def generate_profile(dataset_id: str) -> dict:
    file_path = os.path.join(UPLOAD_DIR, f"{dataset_id}.csv")
    
    if not os.path.exists(file_path):
        raise FileNotFoundError("Dataset not found")

    df = pd.read_csv(file_path)
    

    row_count = int(df.shape[0])
    column_count = int(df.shape[1])
    column_names = df.columns.tolist()
    
    columns_profile = {}
    

    for col in df.columns:
        null_count = int(df[col].isnull().sum())
        null_percentage = round((null_count / row_count) * 100, 2) if row_count > 0 else 0.0
        unique_count = int(df[col].nunique())
        
        if null_percentage > 20:
            insight = f"⚠️ {col} is missing for {null_percentage}% of records. Consider handling nulls before analysis."
        elif 5 <= null_percentage <= 20:
            insight = f"ℹ️ {col} has moderate missing values ({null_percentage}%)."
        else:
            insight = ""
            
        columns_profile[col] = {
            "data_type": str(df[col].dtype),
            "null_count": null_count,
            "null_percentage": null_percentage,
            "unique_values_count": unique_count,
            "insight": insight
        }
        
    return {
        "dataset_id": dataset_id,
        "row_count": row_count,
        "column_count": column_count,
        "column_names": column_names,
        "columns": columns_profile
    }
