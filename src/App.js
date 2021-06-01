import React from "react";
import "./App.scss";
import { CategoriesProvider } from "./context/CategoriesContext";
import Routes from "./routes/index";
import { ThemeProvider } from "./context/ThemeContext";
import { TrackedEventsProvider } from "./context/TrackedEventsContext";
import { LastFive } from "./modules/index";
import { DateProvider } from "./context/DateContext";


const App = () => {
  return (
    <TrackedEventsProvider>
        <ThemeProvider>
          <div className="App">
            <CategoriesProvider>
              <DateProvider>
                <Routes />
              </DateProvider>
            </CategoriesProvider>
          </div>
          <footer>
            <LastFive />
          </footer>
        </ThemeProvider>
    </TrackedEventsProvider>
  );
}

export default App;
