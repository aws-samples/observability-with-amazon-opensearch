import { useState } from "react";

import { Box, Button, Cards, Header } from "@cloudscape-design/components";

import items from "../data/items";

interface Item {
  name: string
  description?: string
  type?: string
  size?: string
  slo?: number
}

export default () => {
  const [
    selectedItems,
    setSelectedItems
  ] = useState<Item[]>([{ name: "Item 1" }]);
  return (
    <Cards
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      ariaLabels={{
        itemSelectionLabel: (e, t) => `select ${t.name}`,
        selectionGroupLabel: "Item selection"
      }}
      cardDefinition={{
        header: e => e.name,
        sections: [
          {
            id: "description",
            header: "Description",
            content: e => e.description
          },
          {
            id: "type",
            header: "Type",
            content: e => e.type
          },
          {
            id: "size",
            header: "Size",
            content: e => e.size
          },
          {
            id: "slo",
            header: "SLO",
            content: e => e.slo + "%"
          }
        ]
      }}
      cardsPerRow={[
        { cards: 1 },
        { minWidth: 350, cards: 3 }
      ]}
      items={items}
      loading
      loadingText="Loading from Inventory..."
      selectionType="multi"
      trackBy="name"
      visibleSections={["description", "type", "size", "slo"]}
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
            selectedItems.length
              ? "(" + selectedItems.length + "/" + items.length + ")"
              : "(10)"
          }
        >
          Common cards with selection
        </Header>
      }
    />
  );
}
