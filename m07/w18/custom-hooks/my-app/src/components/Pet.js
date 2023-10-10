import usePet from "../hooks/usePet";

function Pet() {
  const [data] = usePet();

  return (
    <>
      { data && (
          <div className="pet-container">
            <h2>Pet Component 🐶</h2>
            <img src={data.url} alt="good boy" />
          </div>
        )
      }

      { !data && (
          <div className="pet-container">
            <h2>Pet Component 🐶</h2>
            <p>Loading random dog img...</p>
          </div>
        )
      }
    </>
  )
}

export default Pet;
