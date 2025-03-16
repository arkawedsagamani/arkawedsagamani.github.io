import os
import qrcode

# Replace with your actual wedding website URL hosted on GitHub Pages
wedding_url = "https://arkawedsagamani.github.io/"

# Define the filename for the generated QR code image
output_filename = "wedding_qr.png"

# Check if the QR code image already exists
if not os.path.exists(output_filename):
    # Create a QRCode object with specific settings:
    qr = qrcode.QRCode(
        version=1,  # Smallest size version
        error_correction=qrcode.constants.ERROR_CORRECT_L,  # Error correction level (L = 7% recovery)
        box_size=20,  # Increased box size for higher resolution
        border=4,  # Border thickness (must be at least 4 per standard)
    )

    # Add your wedding website URL to the QR code
    qr.add_data(wedding_url)
    qr.make(fit=True)

    # Create an image from the QR code with golden fill and white background
    img = qr.make_image(fill_color="#FFD700", back_color="white")

    # Save the image to a file
    img.save(output_filename)
    print(f"Golden QR Code generated and saved as {output_filename}!")
else:
    print(f"QR Code already exists as {output_filename}. Delete the file if you wish to regenerate it.")
