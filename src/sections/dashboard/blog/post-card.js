
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'; // Add this import
import { paths } from "src/paths";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

export const PostCard = (props) => {
  const router = useRouter(); // Initialize the router object
  const {
    authorAvatar,
    category,
    shortDescription,
    title,
    id,
    readTime,
    ...other
  } = props;

  const handleReadMore = () => {
    router.push(`/blog/singleBlog?id=${id}`);
  };

  return (
    <Card {...other} sx={{
      borderRadius:"10px !important",
      '&:hover': {
        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.1)',
      }
    }}>
      <CardMedia
        image={authorAvatar}
        sx={{ height: 280,  }}
      />
      <CardContent>
        <Typography
          sx={{
            color: 'text.secondary',
            mt: 1,
          }}
          textAlign={'end'}
          variant="body2"
        >
          {readTime} min read
        </Typography>
        <Typography
          color="text.primary"
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            height: 48,
            mt: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2
          }}
          variant="body1"
        >
          {shortDescription}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 2 ,
            "&:hover": {
              color: "#fff",
              backgroundColor: "primary.main",
            }}}
          onClick={handleReadMore}
          

        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  publishedAt: PropTypes.number.isRequired,
  readTime: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
