import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      {image && (image.startsWith("http") ? (
        <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={image}
      />
      ) : (
        <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://backend-deployed.vercel.app/assets/${image}`}
      />
      ))}
      
    </Box>
  );
};

export default UserImage;
