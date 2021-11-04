import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import debounce from 'lodash/debounce';

import classes from './search.module.scss';

const QUERY = gql`
  query Products($title: String) {
    products(title: $title) {
      _id
      title
      images
    }
  }
`;

function Search({ setSearchOpen }: { setSearchOpen: (arg: boolean) => void }) {
  const router = useRouter();
  const [getProducts, { data, loading }] = useLazyQuery(QUERY);

  const searchProducts = (searchText: string) => {
    getProducts({ variables: { title: searchText } });
  };

  const debouncedSearchProducts = useMemo(
    () => debounce(searchProducts, 400),
    []
  );

  function handleChange(event) {
    debouncedSearchProducts(event.target.value);
  }

  const handleLink = (id: string) => {
    setSearchOpen(false);
    router.push(`/collections/products/${id}`);
  };

  return (
    <div id='search-wrapper' className={classes.container}>
      <form>
        <input
          type='text'
          autoFocus
          // value={searchText}
          onChange={handleChange}
          placeholder='Search...'
        />
        {loading && (
          <div className={classes.spinner}>
            <Image
              height={30}
              width={30}
              src='/images/nav/search-spinner.gif'
              alt='Search spinner'
            />
          </div>
        )}
      </form>
      <ul>
        {data?.products.map(item => {
          return (
            <li key={item._id}>
              <div onClick={() => handleLink(item._id)}>
                <Image
                  src={item.images[0]}
                  height={50}
                  width={40}
                  alt={item.title}
                />
                <span>{item.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Search;
