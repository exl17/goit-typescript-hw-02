import React from "react";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import css from "./SearchBar.module.css";

interface SearchBarProps {
  onsearchQuery: (searchTerm: string) => void;
}

const initialValues = { searchTerm: "" };

const SearchBar: React.FC<SearchBarProps> = ({ onsearchQuery }) => {
  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    if (!values.searchTerm) {
      toast.error("Please enter a search term");
      return;
    }
    onsearchQuery(values.searchTerm);
    setSubmitting(false);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="searchTerm"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage
            className={css.error}
            name="searchTerm"
            component="span"
          />

          <button className={css.submitBtn} type="submit" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
<path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
</svg>
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;