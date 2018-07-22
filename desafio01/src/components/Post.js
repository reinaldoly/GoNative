import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const white = '#FFF';
const grayEEE = '#EEE';
const gray666 = '#666';
const gray999 = '#999';
const gray333 = '#333';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: white,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  headerPost: {
    borderBottomWidth: 1,
    borderColor: grayEEE,
    marginBottom: 10,
  },
  title: {
    color: gray333,
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    color: gray999,
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    color: gray666,
  },
});

const Post = ({ data: { title, author, description } }) => (
  <View style={styles.container}>
    <View style={styles.headerPost}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.author}>
        {author}
      </Text>
    </View>
    <Text style={styles.description}>
      {description}
    </Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Post;
