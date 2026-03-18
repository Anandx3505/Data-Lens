# app/api/upload.py
from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import uuid
import os
from app.services.profiler import generate_profile
from app.schemas.profile import UploadResponse, DatasetProfileResponse

router = APIRouter()
UPLOAD_DIR = "uploads"

@router.post("/upload", response_model=UploadResponse)
async def upload_dataset(file: UploadFile = File(...)):
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Only CSV files are allowed")
    
    dataset_id = str(uuid.uuid4())
    file_path = os.path.join(UPLOAD_DIR, f"{dataset_id}.csv")
    
    # Save the file temporarily
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    return UploadResponse(message="File uploaded successfully", dataset_id=dataset_id)

@router.get("/profile/{dataset_id}", response_model=DatasetProfileResponse)
async def get_profile(dataset_id: str):
    try:
        profile_data = generate_profile(dataset_id)
        return DatasetProfileResponse(**profile_data)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Dataset not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
