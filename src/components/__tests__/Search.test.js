import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA);
            },
        });
    });

it("Should Search restaurant list for burger text input", async ()=>{
    await act(async() => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);
    const search_btn = screen.getByRole("button",{name: "Search"});
    const search_input = screen.getByTestId("search_input");  // if nothing works, getByTestId() always works
    fireEvent.change(search_input, {target: {value : "burger"}});  //similar to typing burger into the search text
    fireEvent.click(search_btn);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should Filter Top Rated Restaurants", async ()=>{
    await act(async() => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforefilter = screen.getAllByTestId("resCard");
    expect(cardsBeforefilter.length).toBe(8);
    const topRatedResBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topRatedResBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);
});



