# app/services/profiler.py
import pandas as pd
import os

UPLOAD_DIR = "uploads"

def generate_profile(dataset_id: str) -> dict:
    file_path = os.path.join(UPLOAD_DIR, f"{dataset_id}.csv")
    
    if not os.path.exists(file_path):
        raise FileNotFoundError("Dataset not found")

    # Read the dataset
    df = pd.read_csv(file_path)
    
    # Generate basic summary
    row_count = int(df.shape[0])
    column_count = int(df.shape[1])
    column_names = df.columns.tolist()
    
    columns_profile = {}
    
    # Generate per-column profile
    for col in df.columns:
        null_count = int(df[col].isnull().sum())
        null_percentage = round((null_count / row_count) * 100, 2) if row_count > 0 else 0.0
        unique_count = int(df[col].nunique())
        
        columns_profile[col] = {
            "data_type": str(df[col].dtype),
            "null_count": null_count,
            "null_percentage": null_percentage,
            "unique_values_count": unique_count
        }
        
    return {
        "dataset_id": dataset_id,
        "row_count": row_count,
        "column_count": column_count,
        "column_names": column_names,
        "columns": columns_profile
    }
