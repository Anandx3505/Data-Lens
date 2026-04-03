# app/schemas/profile.py
from pydantic import BaseModel
from typing import Dict, Any, List

class ColumnProfile(BaseModel):
    data_type: str
    null_count: int
    null_percentage: float
    unique_values_count: int
    insight: str

class DatasetProfileResponse(BaseModel):
    dataset_id: str
    row_count: int
    column_count: int
    column_names: List[str]
    columns: Dict[str, ColumnProfile]

class UploadResponse(BaseModel):
    message: str
    dataset_id: str
