import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import MainTemp from '../templates/MainTemp';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <MainTemp
    meta={<Meta title="Nando Blog" description={AppConfig.description} />}
  >
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </MainTemp>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
