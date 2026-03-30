export default function DatasetProfile({ profile }) {
    if (!profile) return null;

    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Dataset Overview</h2>
                    <p className="text-sm text-slate-500 mt-1 font-mono text-xs">{profile.dataset_id}</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="bg-blue-50 px-5 py-3 rounded-2xl text-center">
                        <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Rows</p>
                        <p className="text-2xl font-black text-blue-900">{profile.row_count.toLocaleString()}</p>
                    </div>
                    <div className="bg-indigo-50 px-5 py-3 rounded-2xl text-center">
                        <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Columns</p>
                        <p className="text-2xl font-black text-indigo-900">{profile.column_count}</p>
                    </div>
                </div>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-4">Column Profiling</h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-700 uppercase font-semibold text-xs border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4">Column Name</th>
                            <th className="px-6 py-4">Data Type</th>
                            <th className="px-6 py-4">Null Count</th>
                            <th className="px-6 py-4">Missing %</th>
                            <th className="px-6 py-4">Unique Values</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {Object.entries(profile.columns).map(([colName, stats]) => (
                            <tr key={colName} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900">{colName}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-mono">
                                        {stats.data_type}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{stats.null_count.toLocaleString()}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${stats.null_percentage > 20 ? 'bg-red-100 text-red-700' :
                                            stats.null_percentage > 0 ? 'bg-amber-100 text-amber-700' :
                                                'bg-emerald-100 text-emerald-700'
                                        }`}>
                                        {stats.null_percentage}%
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-medium">{stats.unique_values_count.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
