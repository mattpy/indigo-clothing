import Collections from '../../components/collections/collections';

function CollectionsPage(props) {
  return (
    <div>
      <Collections collections={props.collections} />
    </div>
  );
}

export async function getStaticProps() {
  const collections = [
    {
      title: 'Denims',
      image: 'https://indigo-clothing-company.s3.amazonaws.com/denim/2-1.jpg',
      link: '/collections/denim'
    },
    {
      title: 'Sweatshirts',
      image:
        'https://indigo-clothing-company.s3.amazonaws.com/sweatshirts/2-1.jpg',
      link: '/collections/sweatshirts'
    },
    {
      title: 'Pants',
      image: 'https://indigo-clothing-company.s3.amazonaws.com/pants/2-1.jpg',
      link: '/collections/pants'
    },
    {
      title: 'Jackets',
      image: 'https://indigo-clothing-company.s3.amazonaws.com/jackets/2-1.jpg',
      link: '/collections/jackets'
    },
    {
      title: 'Caps',
      image: 'https://indigo-clothing-company.s3.amazonaws.com/caps/5-1.jpg',
      link: '/collections/caps'
    }
  ];

  return { props: { collections } };
}

export default CollectionsPage;
