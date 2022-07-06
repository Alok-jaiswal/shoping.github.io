import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/item.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem key={item.id} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
