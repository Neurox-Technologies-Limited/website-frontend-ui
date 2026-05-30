import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground gradient-mesh-bg">
      <div className="text-center px-6">
        <img
          src="/neurox.png"
          alt="Neurox Technologies"
          className="h-12 w-auto mx-auto mb-8"
          width={48}
          height={48}
        />
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight">
          4<span className="gradient-text">0</span>4
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This page could not be found.
        </p>
        <Link to="/" className="cta-button mt-8 inline-flex">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
