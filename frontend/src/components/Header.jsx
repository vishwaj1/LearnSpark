export default function Header({ title }) {
    return (
      <header className="text-center py-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-blue-800">{title}</h1>
      </header>
    );
  }
  