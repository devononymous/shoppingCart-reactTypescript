import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { Navbar } from "../components/Navbar";
import { ShoppingCartProvider } from "../context/ShoppingCardContext";
export function Store() {
  return (
    <ShoppingCartProvider>
    <Navbar/>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}><StoreItem {...item}/></Col>
        ))}
      </Row>
    </ShoppingCartProvider>
  );
}
