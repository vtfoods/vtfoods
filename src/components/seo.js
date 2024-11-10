import Head from 'next/head';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

export const Seo = (props) => {
  const { title, ...rest } = props;

  const fullTitle = title
    ? title + ' | HVG Infotech PVT LTD'
    : 'HVG Infotech PVT LTD';


    return (
      <NextSeo title={fullTitle} {...rest}/>
    )

  // return (
  //   <Head>
  //     <title>
  //       {fullTitle}
  //     </title>
  //   </Head>
  // );
};

Seo.propTypes = {
  title: PropTypes.string
};
