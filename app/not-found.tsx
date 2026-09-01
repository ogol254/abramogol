export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="lost-orbit" />
      <p className="eyebrow">404 / Signal lost</p>
      <h1>This route moved beyond the map.</h1>
      <p>
        The portfolio is still here. Return to the beginning or continue into
        selected work.
      </p>
      <div>
        <a className="button gold" href="/">
          Return home
        </a>
        <a className="text-link" href="/projects">
          Selected work
        </a>
      </div>
    </main>
  );
}
