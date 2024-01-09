const formDataConvert = (data: Record<string, any>) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else if (value instanceof File) {
        if (value) {
          formData.append(key, value);
        }
      } else {
        if (value) {
          formData.append(key, value);
        }
      }
    }
    return formData;
  };

// interface NestedObject {
//   [key: string]: string | number | File | NestedObject | undefined
// }

// function formDataConvert(
//   obj: NestedObject,
//   formData = new FormData(),
//   parentKey = ''
// ): FormData {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key]

//       if (value === undefined) {
//         continue // Skip undefined values
//       }

//       const appendKey = parentKey ? `${parentKey}[${key}]` : key

//       if (value instanceof File) {
//         formData.append(appendKey, value, value.name)
//       } else if (typeof value === 'object' && !(value instanceof File)) {
//         // Recursively convert nested objects
//         formDataConvert(value, formData, appendKey)
//       } else {
//         formData.append(appendKey, value.toString())
//       }
//     }
//   }

//   return formData
// }

export default formDataConvert
