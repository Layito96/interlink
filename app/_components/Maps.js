import { mapURL } from "../_lib/utils";

function Maps() {
  return (
    <section id="google-map-area">
      <div className="mx-6 mb-6">
        <div className="flex">
          <div className="w-full">
            <object
              style={{ border: 0, height: "450px", width: "100%" }}
              data={mapURL}
            ></object>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maps;
