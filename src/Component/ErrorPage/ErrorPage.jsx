import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md p-8 bg-white shadow-md rounded-md">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Oops Error!!</h2>
          <p className="text-gray-600 mb-2 text-center">Something went wrong.</p>
          <p className="text-gray-600 mb-4 text-center">Please try again later.</p>
          <Link to='/'>
            <h1 className="bg-red-500 text-center mx-10 mt-8 text-xl  text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red">
              Refresh Page
            </h1>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;