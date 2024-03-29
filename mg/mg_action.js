var res;
var uuid1 = uuidv4()
var uuid2 = uuidv4()

var start = "{\n\t\"format_version\": 2,\n\t\"header\": {\n";
var header = "\t\t\"name\": \"" + get_from_url_query_param("name") +
             "\",\n\t\t\"description\": \"" + get_from_url_query_param("description") +
             "\",\n\t\t\"version\": [ " + get_from_url_query_param("v1") + ", " + get_from_url_query_param("v2") + ", " + get_from_url_query_param("v3") +
             " ],\n\t\t\"min_engine_version\": [ 1, 17, 10 ],\n\t\t\"uuid\": \"" + uuid1 +
             "\"\n\t},\n\t\"modules\": [\n\t\t{\n";
var modules = "\t\t\t\"version\": [ 0, 0, 1 ],\n\t\t\t\"uuid\": \"" + uuid2 + "\",\n\t\t\t\"type\": \"" + get_from_url_query_param("type") +
              "\"\n\t\t}\n\t]";
var end = "\n}";
var dep = ",\n\t\"dependencies\": [\n\t\t{\n\t\t\t\"uuid\": \"" + get_from_url_query_param("dep_uuid") + "\",\n\t\t\t\"version\": [ " +
          get_from_url_query_param("dep_v1") + ", " + get_from_url_query_param("dep_v2") + ", " + get_from_url_query_param("dep_v3") + " ]\n\t\t}\n\t]";

if (get_from_url_query_param("addDependency")) {
  res = start + header + modules + dep + end;
} else {
  res = start + header + modules + end;
}
console.log(res);