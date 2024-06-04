import serverRespository from "../../repositories/serverRepository";

export const createServer = async (req, res) => {
  try {
    const data = req.body;
    const resData = await serverRespository.saveServer(data);
    if (resData) {
      return res.json({
        success: true,
        message: "create new server success",
        server: resData,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      error: error.message,
      server: [],
    });
  }
};

export const updateServer = (req, res) => {};

export const deleteServer = (req, res) => {};

export const getAllServer = (req, res) => {};

export const getListLikeFB = async (req, res) => {
  try {
    const data = await serverRespository.getLikeFBs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListEyeFB = async (req, res) => {
  try {
    const data = await serverRespository.getEyeFBs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListShareFB = async (req, res) => {
  try {
    const data = await serverRespository.getShareFBs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListViewFB = async (req, res) => {
  try {
    const data = await serverRespository.getViewFBs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListSubFB = async (req, res) => {
  try {
    const data = await serverRespository.getSubFBs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListLikeTT = async (req, res) => {
  try {
    const data = await serverRespository.getLikeTTs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListFollowTT = async (req, res) => {
  try {
    const data = await serverRespository.getFollowTTs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListEyeTT = async (req, res) => {
  try {
    const data = await serverRespository.getEyeTTs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};

export const getListViewTT = async (req, res) => {
  try {
    const data = await serverRespository.getViewTTs();
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      data: [],
      error: error.message,
    });
  }
};
