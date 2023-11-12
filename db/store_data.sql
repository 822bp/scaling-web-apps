CREATE DATABASE store;
use store;

CREATE TABLE products (
    id INT PRIMARY KEY,
    product_name VARCHAR(255),
    image_url VARCHAR(255),
    order_amount INT
);

INSERT INTO products (id, product_name, image_url, order_amount)
VALUES
    (1, 'Zephyr', 'https://images.metmuseum.org/CRDImages/ad/original/DP344828.jpg', 0),
    (2, 'Aurora', 'https://images.metmuseum.org/CRDImages/an/original/vs64_269_1.jpg', 0),
    (3, 'Nova', 'https://images.metmuseum.org/CRDImages/ad/original/DP-15059-037.jpg', 0),
    (4, 'Orion', 'https://images.metmuseum.org/CRDImages/an/original/DT252770.jpg', 0),
    (5, 'Lyra', 'https://images.metmuseum.org/CRDImages/is/original/DP131621.jpg', 0),
    (6, 'Cassiopeia', 'https://images.metmuseum.org/CRDImages/gr/original/DP-23276-001.jpg', 0),
    (7, 'Andromeda', 'https://images.metmuseum.org/CRDImages/ad/original/DP344828.jpg', 0),
    (8, 'Polaris', 'https://images.metmuseum.org/CRDImages/an/original/vs64_269_1.jpg', 0),
    (9, 'Sirius', 'https://images.metmuseum.org/CRDImages/ad/original/DP-15059-037.jpg', 0),
    (10, 'Vega', 'https://images.metmuseum.org/CRDImages/an/original/DT252770.jpg', 0);
