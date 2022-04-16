import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CollectionCard from "./CollectionCard";

function CheckoutpageLeft() {
  const basket = [1, 3, 2, 4];
  const subtitle = (
    <Typography variant="subtitle1">
      You have no product in the cart ,Please add to cart by clicking "ADD TO
      BASKET" button in the collection
    </Typography>
  );
  const product = (
    <Box ml={"20px"}>
      <Container>
        <Typography variant="h6">Thank for choosing ABAEC .</Typography>
        <Typography variant="h6">Your Products,</Typography>
      </Container>
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
    </Box>
  );
  return (
    <Box>
      <Typography variant="h3">Hello</Typography>
      <Divider />
      {basket.length < 0 ? subtitle : product}
    </Box>
  );
}

export default CheckoutpageLeft;