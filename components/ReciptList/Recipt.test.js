import React from "react";
import renderer from "react-test-renderer";
import { View } from "react-native";

import  ReciptList from "./ReciptList";

describe("<ReciptList />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ReciptList
          data={{
            drink1: {
              ingredients: {
                ingedient1: "true",
                ingedient2: "false",
                ingedient3: "true",
              },
              instructions: "instruction1",
              name: "margarita",
            },
          }}
          setDrink={() => {
            return;
          }}
          setModalVisible={() => {
            return;
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

    it("showing view", () => {
        const tree = renderer
        .create(<ReciptList
            data={{
              
            }}
            setDrink={() => {
              return;
            }}
            setModalVisible={() => {
              return;
            }}
          />
        ).toJSON();
        expect(tree.type).toBe('RCTScrollView');
    }
    );
});
