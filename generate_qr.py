import qrcode

# Replace the URL below with your actual wedding website URL hosted on GitHub Pages
wedding_url = "https://arkawedsagamani.github.io/"

# Create a QRCode object with specific settings:
qr = qrcode.QRCode(
    version=1,  # Smallest size version
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # Error correction level (L = 7% recovery)
    box_size=10,  # Size of each box in the QR grid
    border=4,  # Border thickness (minimum is 4)
)

# Add your wedding website URL to the QR code
qr.add_data(wedding_url)
qr.make(fit=True)

# Create an image from the QR code (black fill on white background)
img = qr.make_image(fill_color="black", back_color="white")

# Save the image as wedding_qr.png
img.save("wedding_qr.png")

print("QR Code generated and saved as wedding_qr.png!")
