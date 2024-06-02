import { GetStaticProps } from "next";
import { collectedNotes } from "collected-notes";
import { SearchPageProps } from "types";
import { SearchLayout } from "layouts/search";

const cn = collectedNotes(process.env.CN_EMAIL, process.env.CN_TOKEN);

export const getStaticProps: GetStaticProps<SearchPageProps> = async () => {
  const { site } = await cn.site(process.env.CN_SITE_PATH, 1, "public_site");
  return { props: { site } };
};

import React from 'react';

const Search: React.FC = () => {
  return (
    <div>
      {/* Otros elementos del componente de búsqueda */}
      <a href='https://cafecito.app/nicoproducto' rel='noopener' target='_blank'>
        <img srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invitame un café en cafecito.app' />
      </a>
    </div>
  );
};

export default Search;


export default SearchLayout;
