import { useState } from 'react';
import Header from './components/Header';
import UploadCard from './components/UploadCard';
import DatasetProfile from './components/DatasetProfilee';
import { uploadDataset, fetchProfile } from './services/api';

export default function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
    if (file.size > MAX_FILE_SIZE) {
      setError('File is too large. Maximum size is 50MB.');
      return;
    }

    setLoading(true);
    setError('');
    setProfile(null);

    try {
      const uploadData = await uploadDataset(file);
      const profileData = await fetchProfile(uploadData.dataset_id);

      setProfile(profileData);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <Header />

        <UploadCard
          file={file}
          setFile={setFile}
          onUpload={handleUpload}
          loading={loading}
          error={error}
        />

        <DatasetProfile profile={profile} />
      </div>
    </div>
  );
}
