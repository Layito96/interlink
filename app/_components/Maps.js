function Maps() {
  return (
    <section id="google-map-area">
      <div className="mx-6 mb-6">
        <div className="flex">
          <div className="w-full">
            <object
              style={{ border: 0, height: "450px", width: "100%" }}
              data="https://maps.google.com/maps?q=wimex%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            ></object>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maps;
