import { Typography } from '@vegangouda/design-system';
import { Route, Routes, Link } from 'react-router-dom';

// import { WebDesignSystem } from '@vegangouda/web/design-system';

export function App() {

  return (
    <div>
      {/* <NxWelcome title="web" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}

      <Routes>
        <Route
          path="/"
          element={<div>{
            /* <Typography>Test</Typography> */
            }</div>}
        />
        {/* <Route path="/design-system" element={<WebDesignSystem />} /> */}
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
