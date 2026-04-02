export default function Header() {
    return (
        <header className="text-center space-y-4 pt-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
                Data<span className="text-blue-600">Lens</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Upload your CSV dataset to automatically discover insights, data types, and null value percentages.
            </p>
        </header>
    );
}
