package micom.seed.core.soat.components.content.title;

import com.adobe.cq.sightly.WCMUsePojo;

public class Title extends WCMUsePojo {
	private String titleType = "h3";
    public String getTitleType() {
        return titleType;
    }

	@Override
	public void activate() throws Exception {
		this.titleType = get("titleType", String.class);		
	}
}