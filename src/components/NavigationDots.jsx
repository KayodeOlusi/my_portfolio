const NavigationDots = ({ active }) => {
  const items = ["home", "about", "works", "skills", "contact"];

  return (
    <div className="app__navigation">
      {items.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
