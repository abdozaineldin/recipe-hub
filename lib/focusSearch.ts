const focusSearch = () => {
  const isMobile = window.innerWidth < 640;
  const id = isMobile ? "mobile" : "desktop";
  const input = document.getElementById(id) as HTMLInputElement | null;

  input?.focus();
};

export default focusSearch;
