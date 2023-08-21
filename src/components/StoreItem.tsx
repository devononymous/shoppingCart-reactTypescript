import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCardContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, removeFromCart, decreaseCartQuantity} = useShoppingCart();
    const quantity = getItemQuantity(id);
    

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body key={id} className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-Items-Baseline mb-4">
          <span className="fs-2"> {name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>increaseCartQuantity(id)}> + Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-itms-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-contnent-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>in cart
                </div>
                <Button  onClick={()=>increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={()=> removeFromCart(id)} size="sm" variant="danger">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}