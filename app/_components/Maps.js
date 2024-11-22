import { mapURL } from "../_lib/utils";

function Maps() {
  return (
    <section id="google-map-area" className="mx-6 mb-6">
      <div className="flex w-full">
        <iframe
          title="Google Map"
          src={mapURL}
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Maps;
