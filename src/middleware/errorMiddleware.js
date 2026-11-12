export default function errorHandler(error, req, res, next) {
  console.error(error);

  if (error.code === "P2002") {
    return res.status(409).json({
      success: false,
      message: "A product with this SKU already exists",
    });
  }

  if (error.code == "P2025") {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  if (error.statusCode) {
    return res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong on the server",
  });
}