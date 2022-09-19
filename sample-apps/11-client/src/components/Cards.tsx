import { useEffect, useState } from "react";

import { Box, Button, Cards, CardsProps, Header } from "@cloudscape-design/components";
import Image from "./Image";
import items from "../data/items";

interface IFnTotal {
  handleTotal: (num: number) => void;
}
interface Item {
  id: number
  price: number
  image?: string
  name?: string
  slo?: number
}

function Card({ handleTotal }: IFnTotal) {
  const [
    selectedItems,
    setSelectedItems
  ] = useState<Item[]>();
  const [inventory, setInventory] = useState(true);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setInventory(false);
    }, 1000 * 3)
    return () => clearInterval(intervalId)
  }, []);

  // const makeCheckoutCall = () => {
  //   fetch('/checkout')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     });
  // }

  const evntHandler = async (e: CardsProps.SelectionChangeDetail<Item>) => {
    let prices;
    if (e.selectedItems.length === 1) {
      prices = 0;
      handleTotal(e.selectedItems[0].price)
    } else {
      prices = 0;
      prices = e.selectedItems
        .reduce<number>((acc, curr) => {
          return acc + curr.price
        }, 0);
      await fetch('/create-order')
        .then(res => res.json())
        .then(async (data) => {
          console.log(data)
          // await makeCheckoutCall();
        });
      handleTotal(prices)
    }
  }


  return (
    <Cards
      onSelectionChange={({ detail }) => {
        setSelectedItems(detail.selectedItems);
        evntHandler(detail);
      }}
      selectedItems={selectedItems}
      ariaLabels={{
        itemSelectionLabel: (e, t) => `select ${t.id}`,
        selectionGroupLabel: "Item selection"
      }}
      cardDefinition={{
        header: e => e.name,
        sections: [
          {
            id: "description",
            header: "",
            content: e => <Image src={`/products/${e.image}`} title={e.name} />,
          },
          {
            id: "slo",
            header: "SLO",
            content: e => e.slo + "%"
          },
          {
            id: "price",
            header: "Price",
            content: e => e.price + " GLD"
          }
        ]
      }}
      cardsPerRow={[
        {
          cards: 1
        },
        {
          minWidth: 500,
          cards: 2
        },
        {
          minWidth: 768,
          cards: 3
        }
      ]}
      className={"cards"}
      items={items}
      loading={inventory}
      loadingText="Loading from Inventory API..."
      selectionType="multi"
      trackBy="id"
      visibleSections={["description", "slo", "price"]}
      empty={
        <Box textAlign="center" color="inherit">
          <b>No resources</b>
          <Box
            padding={{ bottom: "s" }}
            variant="p"
            color="inherit"
          >
            No resources to display.
          </Box>
          <Button>Create resource</Button>
        </Box>
      }
      header={
        <Header
          counter={
            selectedItems?.length
              ? "(" + (selectedItems?.length) + "/" + items.length + ")"
              : "(0)"
          }
        >
          Selected
        </Header>
      }
    />
  );
}

export default Card;
