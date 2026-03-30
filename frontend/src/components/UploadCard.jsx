export default function UploadCard({ file, setFile, onUpload, loading, error }) {
    const handleFileChange = (e) => setFile(e.target.files[0]);

    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 max-w-xl mx-auto">
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl p-10 bg-slate-50 hover:bg-slate-100 transition-colors">
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2.5 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100 cursor-pointer transition-all"
                />
            </div>

            {error && <p className="mt-4 text-red-500 text-sm text-center font-medium">{error}</p>}

            <button
                onClick={onUpload}
                disabled={!file || loading}
                className={`mt-6 w-full py-3.5 rounded-xl font-bold text-white shadow-md transition-all ${!file || loading
                        ? 'bg-slate-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:-translate-y-0.5'
                    }`}
            >
                {loading ? 'Analyzing Dataset...' : 'Upload & Analyze'}
            </button>
        </div>
    );
}
