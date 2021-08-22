package com.app.brc.brandcomputer.components.video_card.dto;

import com.app.brc.brandcomputer.components.video_card.model.VideoCard;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
public class GenerateProductCodeVideoCardDTO {

    private int id;
    private String productCode;
    private String productName;
    private LocalDate createdDate;
    private boolean state;
    private List<VideoCard> videoCardList;
}
