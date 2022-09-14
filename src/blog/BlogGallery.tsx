import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul className="lg:w-[959px] m-auto">
      {props.posts.map((elt) => (
        <li
          key={elt.slug}
          className="mb-3 flex justify-between px-2 py-2 rounded-lg border-b-2 border-black hover:bg-zinc-100 duration-300"
        >
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className=" text-zinc-900">
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div className="text-right text-indigo-800">
            {format(new Date(elt.date), 'LLL d, yyyy')}
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
