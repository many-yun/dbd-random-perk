const getImageURL = url => {
  return url.split('/revision')[0]
}

export default getImageURL
