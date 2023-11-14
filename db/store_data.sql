CREATE DATABASE store;
use store;

CREATE TABLE products (
    id INT PRIMARY KEY,
    product_name VARCHAR(255),
    image_url VARCHAR(255),
    order_amount INT,
    order_price INT
);

INSERT INTO products (id, product_name, image_url, order_amount, order_price)
VALUES
    (1, 'Zephyr', 'https://images.metmuseum.org/CRDImages/ad/original/DP344828.jpg', 0, 4320),
    (2, 'Aurora', 'https://images.metmuseum.org/CRDImages/an/original/vs64_269_1.jpg', 0, 5360),
    (3, 'Nova', 'https://images.metmuseum.org/CRDImages/ad/original/DP-15059-037.jpg', 0, 8470),
    (4, 'Orion', 'https://images.metmuseum.org/CRDImages/an/original/DT252770.jpg', 0, 1110),
    (5, 'Lyra', 'https://images.metmuseum.org/CRDImages/is/original/DP131621.jpg', 0, 7340),
    (6, 'Cassiopeia', 'https://images.metmuseum.org/CRDImages/gr/original/DP-23276-001.jpg', 0, 9760),
    (7, 'Andromeda', 'https://images.metmuseum.org/CRDImages/ad/original/DP344828.jpg', 0, 5660),
    (8, 'Polaris', 'https://images.metmuseum.org/CRDImages/an/original/vs64_269_1.jpg', 0, 2760),
    (9, 'Sirius', 'https://images.metmuseum.org/CRDImages/ad/original/DP-15059-037.jpg', 0, 4590),
    (10, 'Vega', 'https://images.metmuseum.org/CRDImages/an/original/DT252770.jpg', 0, 5490);
