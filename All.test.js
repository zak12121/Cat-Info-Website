import {render, screen, cleanup} from '@testing-library/react';
import App from './App.js';
import Sidebar from './components/Sidebar.js';
import Nav from './components/Sidebar.js';
import Footer from './components/Footer.js';
import Home, {factUrl} from './pages/Home.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { rest } from "msw";
import { setupServer } from "msw/node";

const factResponse = rest.get(factUrl, (req, res, ctx) => {
  return res(
    ctx.json([
      { fact: "clean room", length: 10 },

    ])
  );
});


//const handlers = [factResponse];

const server = new setupServer(factResponse);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("it should have the correct fact", async () => {
  render(<Home />);
  const fact= await screen.findByText("clean room");
  expect(fact).toBeVisible();
});

// global.fetch = jest.fn(() => 
// Promise.resolve({
//   json: () => 
//   Promise.resolve({
//     fact:"Cat fact",
//   })
// }));

// describe("Home", () => {
//   it("loads the fact", async () => {
//     await act(async () => render(<Home/>))
//     expect(screen.getByText("Cat Fact")).toBeInTheDocument();
//   })
// });

test('should render App', () => {
    render(<App/>);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
});

 
test('should render Sidebar', () => {
  render(
    <Router>
      <Sidebar/>
    </Router>);
  const Element = screen.getByTestId('sidebar');
  expect(Element).toBeInTheDocument();
});

test('should render Navigation', () => {
  render(
    <Router>
      <Nav/>
    </Router>);
  const Element = screen.getByTestId('nav');
  expect(Element).toBeInTheDocument();
});

test('should render Footer', () => {
  render(<Footer/>);
  const Element = screen.getByTestId('footer');
  expect(Element).toBeInTheDocument();
});

test('should render Home page', () => {
  render(<Home/>);
  const Element = screen.getByTestId('home');
  expect(Element).toBeInTheDocument();
});