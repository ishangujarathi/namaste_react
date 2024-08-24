import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the Header Component with Login Button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const login_button = screen.getByRole("button",{name:"Login"});  //If we have multiple buttons, to get specific button we can pass multiple parameters as well
    //const login_button = screen.getByText("Login");
    expect(login_button).toBeInTheDocument();
});

it("Should render the Header Component with Cart Items 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cart_items = screen.getByText("Cart - (0 items)");
    //const login_button = screen.getByText("Login");
    expect(cart_items).toBeInTheDocument();
});

it("Should render the Header Component with Cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cart_items = screen.getByText(/Cart/);  //we can aslo pass a regex
    //const login_button = screen.getByText("Login");
    expect(cart_items).toBeInTheDocument();
});

it("Should change Login Butoon to Logout onclick",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const login_button = screen.getByRole("button",{name: "Login"});
    fireEvent.click(login_button);
    const logout_button = screen.getByRole("button",{name: "Logout"});
    expect(logout_button).toBeInTheDocument();
});




