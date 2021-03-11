import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";
/*if you ever need to get the type of an event hover the cursor over the action
attribute like onSubmit="".
Don't forget to preventDefault once a form submitted like in vanilla JS
Mind a custom hook useActions - it binds ActionCreator with a useDispatch
useSelector / useTypedSelector - is similar to mapStateToProps*/

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((s) => s.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="ui form">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
        <button className="ui button primary">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>{loading}</h3>}
      {!error &&
        !loading &&
        data.map((i) => (
          <div className="item" key={i}>
            {i}
          </div>
        ))}
    </div>
  );
};
export default RepositoriesList;
